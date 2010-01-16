Element.GetUntil
================

![getUntil](http://github.com/rpflorence/Element.GetUntil/raw/master/logo.png)

* `parentsUntil` - Get the ancestors of the element up to but not including the element matched by the selector.
* `getAllNextUntil` - Get all following siblings of the element up to but not including the element matched by the selector.
* `getAllPreviousUntil` - Get all preceding siblings of the element up to but not including the element matched by the selector.

Similar to jQuery's `nextUntil`, `prevUntil`, and `parentsUntil`, except it is only for a single element rather than a set of elements.

How to use
----------

*HTML*

    #HTML
    <dl>
      <dt>term 1</dt>
      <dd>definition 1-a</dd>
      <dd>definition 1-b</dd>
      <dd>definition 1-c</dd>
      <dd>definition 1-d</dd>

      <dt id="term-2">term 2</dt>
      <dd>definition 2-a</dd>
      <dd>definition 2-b</dd>
      <dd>definition 2-c</dd>

      <dt>term 3</dt>
      <dd>definition 3-a</dd>
      <dd>definition 3-b</dd>
    </dl>
    
    <ul class="level-1">
      <li class="item-i">I</li>
      <li class="item-ii">II
        <ul class="level-2">
          <li class="item-a">A</li>
          <li class="item-b">B
            <ul class="level-3">
              <li class="item-1">1</li>
              <li class="item-2">2</li>
              <li class="item-3">3</li>
            </ul>
          </li>
          <li class="item-c">C</li>
        </ul>
      </li>
      <li class="item-iii">III</li>
    </ul>
    

*JS*

    #JS
    $('term-2').getAllPreviousUntil('dt');
    $('term-2').getAllNextUntil('dt');
    document.getElement('li.item-3').getParentsUntil('.level-1');