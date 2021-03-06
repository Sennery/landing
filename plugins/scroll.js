import Vue from 'vue';
import { events } from './events';
import { viewport } from './viewport';

const scroll = new Vue({
    data() {
        return {
            baseScroll: 50,

            scroll: 0,
            lerpedScroll: 0,

            lastTouch: 0,

            breakpoint: {
                low: -100,
                hight: 100
            }
        }
    },
    computed: {
        normalized() {
            return this.scroll / this.breakpoint.hight;
        },
        lerpedNormalized() {
            return this.lerpedScroll / this.breakpoint.hight;
        }
    },
    created() {
        this.clamper = GSAP.utils.clamp(
            -this.baseScroll,
            this.baseScroll
        );

        addEventListener('touchmove', this.onScroll, false);
        addEventListener('wheel', this.onScroll, false);
    },
    beforeDestroy() {
        removeEventListener('touchmove', this.onScroll);
        removeEventListener('wheel', this.onScroll);
    },
    methods: {
        onBreakpoint(isNext) {
            events.$emit('scroll:breackpoint', isNext);
        },
        onComplete() {
            if (this.breakpoint.hight <= this.scroll) {
                this.onBreakpoint(true);
            } else if (this.breakpoint.low >= this.scroll) {
                this.onBreakpoint(false);
            }
            this.scroll = 0;
            this.tween?.kill();
            this.tween = GSAP.to(this, {
                duration: 1,
                delay: 0.1,
                lerpedScroll: this.scroll,
                ease: 'expo.out'
            });
        },
        onScroll(e) {
            if (this.breakpoint.hight <= this.scroll
                || this.breakpoint.low >= this.scroll) {
                return;
            }

            const touches = e.changedTouches;
            if (touches && touches.length) {
                const changedToucheY = touches[0].pageY - this.lastTouch;
                this.lastTouch = touches[0].pageY;
    
                this.scroll -= this.baseScroll * Math.sign(changedToucheY);
            } else {                
                this.scroll -= this.baseScroll * Math.sign(e.wheelDeltaY);
            }               

            events.$emit('scroll:scroll');

            this.tween?.kill();
            this.tween = GSAP.to(this, {
                duration: 0.5,
                lerpedScroll: this.scroll,
                ease: 'expo.out',
                onComplete: () => this.onComplete()
            });
        }
    }
});

export { scroll };

export default (context, inject) => {
    inject('scroll', scroll);
}; 