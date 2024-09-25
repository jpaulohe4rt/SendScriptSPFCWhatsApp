async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
Salve o tricolor paulista
Amado clube brasileiro
Tu és forte, tu és grande
Dentre os grandes és o primeiro
Tu és forte, tu és grande
Dentre os grandes és o primeiro
Ó tricolor
Clube bem amado
As tuas glórias
Vêm do passado
Ó tricolor
Clube bem amado
As tuas glórias
Vêm do passado
São teus guias brasileiros
Que te amam ternamente
De São Paulo tens o nome
Que ostentas dignamente
De São Paulo tens o nome
Que ostentas dignamente
Ó tricolor
Clube bem amado
As tuas glórias
Vêm do passado
Ó tricolor
Clube bem amado
As tuas glórias
Vêm do passado
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
