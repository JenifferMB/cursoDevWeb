//middleware pattern (chain of responsability)

const step1 = (ctx, next) => {
    ctx.value1 = "mid1"
    next()
}

const step2 = (ctx, next) => {
    ctx.value2 = "mid2"
    next()
}

const step3 = ctx => ctx.value3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const steps = i => {
        middlewares && i < middlewares.length && middlewares[i](ctx, () => steps(i + 1))
    }
    steps(0)
}

const ctx = {}
exec(ctx, step1, step2, step3)
console.log(ctx)