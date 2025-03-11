(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_fb417c44._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/effects/StaggedFade.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StaggedFade)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const variants = {
    initial: {
        opacity: 0
    },
    whileInView: (custom)=>({
            opacity: 1,
            transition: {
                when: custom?.delay ? undefined : 'beforeChildren',
                delay: custom?.delay ?? undefined
            }
        }),
    exit: {
        opacity: 0
    }
};
function StaggedFade({ children, className, custom }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: variants,
        initial: "initial",
        animate: "initial",
        whileInView: "whileInView",
        exit: "exit",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        custom: custom,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/effects/StaggedFade.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = StaggedFade;
var _c;
__turbopack_context__.k.register(_c, "StaggedFade");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/effects/TextEffect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextEffect": (()=>TextEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const defaultStaggerTimes = {
    char: 0.03,
    word: 0.05,
    line: 0.1
};
const defaultContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const defaultItemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
const presetVariants = {
    blur: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                filter: 'blur(12px)'
            },
            visible: {
                opacity: 1,
                filter: 'blur(0px)'
            },
            exit: {
                opacity: 0,
                filter: 'blur(12px)'
            }
        }
    },
    'fade-in-blur': {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                y: 20,
                filter: 'blur(12px)'
            },
            visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
            },
            exit: {
                opacity: 0,
                y: 20,
                filter: 'blur(12px)'
            }
        }
    },
    scale: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                scale: 0
            },
            visible: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0
            }
        }
    },
    fade: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        }
    },
    slide: {
        container: defaultContainerVariants,
        item: {
            hidden: {
                opacity: 0,
                y: 20
            },
            visible: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 20
            }
        }
    }
};
const AnimationComponent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(({ segment, variants, per, segmentWrapperClassName })=>{
    const content = per === 'line' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        variants: variants,
        className: "block",
        children: segment
    }, void 0, false, {
        fileName: "[project]/src/components/effects/TextEffect.tsx",
        lineNumber: 120,
        columnNumber: 7
    }, this) : per === 'word' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        "aria-hidden": "true",
        variants: variants,
        className: "inline-block whitespace-pre",
        children: segment
    }, void 0, false, {
        fileName: "[project]/src/components/effects/TextEffect.tsx",
        lineNumber: 124,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        className: "inline-block whitespace-pre",
        children: segment.split('').map((char, charIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                "aria-hidden": "true",
                variants: variants,
                className: "inline-block whitespace-pre",
                children: char
            }, `char-${charIndex}`, false, {
                fileName: "[project]/src/components/effects/TextEffect.tsx",
                lineNumber: 134,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/effects/TextEffect.tsx",
        lineNumber: 132,
        columnNumber: 7
    }, this);
    if (!segmentWrapperClassName) {
        return content;
    }
    const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(defaultWrapperClassName, segmentWrapperClassName),
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/effects/TextEffect.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
});
_c = AnimationComponent;
AnimationComponent.displayName = 'AnimationComponent';
const splitText = (text, per)=>{
    if (per === 'line') return text.split('\n');
    return text.split(/(\s+)/);
};
const hasTransition = (variant)=>{
    return typeof variant === 'object' && variant !== null && 'transition' in variant;
};
const createVariantsWithTransition = (baseVariants, transition)=>{
    if (!transition) return baseVariants;
    const { exit: _, ...mainTransition } = transition;
    return {
        ...baseVariants,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...hasTransition(baseVariants.visible) ? baseVariants.visible.transition : {},
                ...mainTransition
            }
        },
        exit: {
            ...baseVariants.exit,
            transition: {
                ...hasTransition(baseVariants.exit) ? baseVariants.exit.transition : {},
                ...mainTransition,
                staggerDirection: -1
            }
        }
    };
};
function TextEffect({ children, per = 'char', as = 'p', variants, className, preset = 'fade', delay = 0, speedReveal = 1, speedSegment = 1, trigger = true, onAnimationComplete, onAnimationStart, segmentWrapperClassName, containerTransition, segmentTransition, style }) {
    const segments = splitText(children, per);
    const MotionTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"][as];
    const baseVariants = preset ? presetVariants[preset] : {
        container: defaultContainerVariants,
        item: defaultItemVariants
    };
    const stagger = defaultStaggerTimes[per] / speedReveal;
    const baseDuration = 0.3 / speedSegment;
    const customStagger = hasTransition(variants?.container?.visible ?? {}) ? variants?.container?.visible.transition?.staggerChildren : undefined;
    const customDelay = hasTransition(variants?.container?.visible ?? {}) ? variants?.container?.visible.transition?.delayChildren : undefined;
    const computedVariants = {
        container: createVariantsWithTransition(variants?.container || baseVariants.container, {
            staggerChildren: customStagger ?? stagger,
            delayChildren: customDelay ?? delay,
            ...containerTransition,
            exit: {
                staggerChildren: customStagger ?? stagger,
                staggerDirection: -1
            }
        }),
        item: createVariantsWithTransition(variants?.item || baseVariants.item, {
            duration: baseDuration,
            ...segmentTransition
        })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "popLayout",
        children: trigger && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionTag, {
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: computedVariants.container,
            className: className,
            onAnimationComplete: onAnimationComplete,
            onAnimationStart: onAnimationStart,
            style: style,
            children: [
                per !== 'line' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/effects/TextEffect.tsx",
                    lineNumber: 277,
                    columnNumber: 29
                }, this) : null,
                segments.map((segment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimationComponent, {
                        segment: segment,
                        variants: computedVariants.item,
                        per: per,
                        segmentWrapperClassName: segmentWrapperClassName
                    }, `${per}-${index}-${segment}`, false, {
                        fileName: "[project]/src/components/effects/TextEffect.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/effects/TextEffect.tsx",
            lineNumber: 267,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/effects/TextEffect.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_c1 = TextEffect;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimationComponent");
__turbopack_context__.k.register(_c1, "TextEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Pill.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Pill)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const pillVariants = {
    initial: {
        opacity: 0,
        y: 6,
        filter: 'blur(4px)'
    },
    whileInView: (custom)=>({
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                opacity: {
                    delay: custom?.delay ?? 0,
                    ease: 'easeOut'
                },
                filter: {
                    delay: custom?.delay ?? 0,
                    ease: 'easeOut'
                },
                y: {
                    delay: custom?.delay ?? 0,
                    ease: 'easeOut'
                }
            }
        }),
    exit: {
        filter: 'blur(4px)',
        opacity: 0,
        y: -6
    }
};
function Pill({ children, fg = 'text-foreground', bg = 'bg-transparent', custom }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-sm font-semibold select-none", fg, bg),
        variants: pillVariants,
        initial: "initial",
        animate: "initial",
        whileInView: "whileInView",
        exit: "exit",
        custom: custom,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Pill.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Pill.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = Pill;
var _c;
__turbopack_context__.k.register(_c, "Pill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Portrait.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Portrait)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const MotionImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
_c = MotionImage;
const containerVariants = {
    initial: ({ width })=>({
            x: 64,
            rotateY: -90,
            opacity: 0,
            marginLeft: -32
        }),
    whileInView: ({ delay })=>({
            x: 0,
            rotateY: 0,
            opacity: 1,
            marginLeft: 0,
            transition: {
                delay,
                type: 'spring',
                bounce: 0.15
            }
        }),
    exit: ({ height })=>({
            x: 64,
            rotateY: -90,
            marginLeft: -32,
            opacity: 0
        })
};
const imageVariants = {
    initial: ({ width, height })=>({
            opacity: 0,
            scale: 1.05,
            width,
            height
        }),
    whileInView: ({ width, height, delay })=>({
            opacity: 1,
            scale: 1,
            transition: {
                opacity: {
                    delay,
                    duration: 0.5
                },
                scale: {
                    delay,
                    duration: 2
                }
            }
        }),
    exit: {
        opacity: 0,
        scale: 1.05
    }
};
function Portrait({ src, alt, width, height, className, imageClassName, delay }) {
    const mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative rounded-full overflow-hidden', className);
    const mergedImageClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('z-0', imageClassName);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: containerVariants,
        initial: "initial",
        animate: "initial",
        whileInView: "whileInView",
        exit: "exit",
        className: mergedClassName,
        custom: {
            delay,
            width,
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionImage, {
            variants: imageVariants,
            initial: "initial",
            whileInView: "whileInView",
            exit: "exit",
            priority: true,
            src: src,
            alt: alt,
            width: width,
            height: height,
            className: mergedImageClassName,
            custom: {
                delay,
                width,
                height
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Portrait.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Portrait.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c1 = Portrait;
var _c, _c1;
__turbopack_context__.k.register(_c, "MotionImage");
__turbopack_context__.k.register(_c1, "Portrait");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/Spacer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Spacer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function Spacer({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-[70dvh]", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[1px] h-full bg-foreground/20"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Spacer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Spacer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Spacer;
var _c;
__turbopack_context__.k.register(_c, "Spacer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_fb417c44._.js.map