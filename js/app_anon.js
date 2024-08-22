$(document).ready(function() {

    // generated code
    var codegen_html_template = `
<pre class="codegen"><code class="language-python">{code}</code></pre>`;
    $('[id^="example"]').each(function() {
        var id = this.id;
        var path = this.getAttribute("data-path");
        var obj = this;
        $.get(path, function(data) {
            var highlighted_code = hljs.highlight(data, {language: 'python'}).value;
            var html_code = codegen_html_template
                                .replace('{code}', highlighted_code)
                                .replace('{link}', path);
            obj.innerHTML = html_code;
         }, 'text');
    });
});
