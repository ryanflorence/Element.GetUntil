/*
---

script: Element.GetUntil.js

description: Gets siblings or parents until a matching selector is found.

license: MIT-style license.

authors: Ryan Florence

docs: http://moodocs.net/rpflo/mootools-rpflo/Element.GetUntil

requires:
- core:1.2.4:Element

provides: [Element.getAllPreviousUntil, Element.getAllNextUntil, Element.getParentsUntil]

...
*/

(function(){
    
    var walkUntil = function(element, walk, match, nocash){
        var el = element[walk];
        var elements = [];
        while (el){
            if (el.nodeType == 1){
                if (!match || Element.match(el, match)) {
                    break;
                } else {
                    elements.push(el);
                }
            }
            el = el[walk];
        }
        return new Elements(elements, {ddup: false, cash: !nocash});
    }
    
    Element.implement({
        
        getAllPreviousUntil: function(match, nocash){
            return walkUntil(this, 'previousSibling', match, nocash);
        },
        
        getAllNextUntil: function(match, nocash){
            return walkUntil(this, 'nextSibling', match, nocash);
        },
            
        getParentsUntil: function(match, nocash){
            return walkUntil(this, 'parentNode', match, nocash);
        }

    });
    
})();