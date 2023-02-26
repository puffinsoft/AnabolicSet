(function () {
    const clipboardData = {
        npm: "npm i anabolicset\nimport { AnabolicSet } from 'anabolicset/src/anabolicset'",
        html: `<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/AnabolicSet@latest/src/anabolicset.min.js"></script>`
    }

    $('.terminal-copy').click(function () {
        const clipboardKey = $(this).data('clipboard-key')
        navigator.clipboard.writeText(clipboardData[clipboardKey]).then(() => {
            $(this).hide().siblings('.terminal-copied').show()
            setTimeout(() => {
                $(this).show().siblings('.terminal-copied').hide()
            }, 1250)
        })
    })

    $('.installation-option').click(function(){
        $('.installation-option').removeClass('active-option')
        $(this).addClass('active-option')
        const id = $(this).data('id')
        $('#installation .option').hide()
        $(`#installation .option[data-id="${id}"]`).show()
    })
})()