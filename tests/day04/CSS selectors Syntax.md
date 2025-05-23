Basic Syntax:
===========
tagname[attribute='value']
1.using id:
==========
input[id='username']
tagname # value--> # represents id
input # username

2.using class name:
===================
input[class='inputLogin']
tagname.value--> .represents class name
input.inputlogin

3.Based on attribute:
================
label[for='username']

4.Using tag, class/id and attribute based:
================================
tagname#value[attribute='value']
tagname.value[attribute='value']
input#username[name='USERNAME']
input.inputLogin[name='USERNAME']

5.using multiple attribute:
==================
input.inputLogin[name='USERNAME'][type='text']
[name='USERNAME'][type='text']

6.Using parent-child:
================
basic cssselector>tagname of child
#button>div>a
7.Using parent-multiple child-->pseudoClasses:
======================
ul>li:nth-of-type(2)-->finding the element with the position of the child 
ul>li:first-of-type-->finds the first element of its type
ul>li:last-of-type-->finds the last element of its type
nth-child()->find the child element based on position
last-child
first-child
8. to locate the descendant element(grandparent-grandchild):
============================
idvaluespacetagname-->grandparent to grandchild
idvaluespacetagname:nth-of-type-->grandparent to grandchild based on the position of the grandchild
idvaluespacetagname:nth-of-typespacetagname -->greatgrand parent to grandchild
idvaluespacetagname:nth-of-typespacetagname>tagname-->greatgrand parent to grandchild

9: substring matches:
================
input[name^='company'][class='inputBox'] -> ^ represents the prefix match of the String
input[name$='Name'][class='inputBox']-->$ represents the sufix of the string
input[name*='Name'][class='inputBox']-->* represents the contains