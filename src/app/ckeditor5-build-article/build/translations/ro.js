(function(d){	const l = d['ro'] = d['ro'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 din %1",Bold:"Îngroșat","Bulleted List":"Listă cu puncte",Cancel:"Anulare","Change image text alternative":"Schimbă textul alternativ al imaginii","Choose heading":"Alege titlu","Dropdown toolbar":"Bară listă opțiuni","Editor toolbar":"Bară editor","Enter image caption":"Introdu titlul descriptiv al imaginii",Heading:"Titlu","Heading 1":"Titlu 1","Heading 2":"Titlu 2","Heading 3":"Titlu 3","Heading 4":"Titlu 4","Heading 5":"Titlu 5","Heading 6":"Titlu 6","image widget":"widget imagine",Italic:"Cursiv",Next:"Înainte","Numbered List":"Listă numerotată",Paragraph:"Paragraf",Previous:"Înapoi",Redo:"Revenire","Rich Text Editor, %0":"Editor de text, %0",Save:"Salvare","Show more items":"","Text alternative":"Text alternativ",Undo:"Anulare"}	);l.getPluralForm=function(n){return (n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));