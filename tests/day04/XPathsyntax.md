
Absolute xpath
=============
	starts with 
(/html/body/div[2]/div/div)[3]-long path-not recommended

Relative xpath
========
starts with
 //tagname[@attribute name='attribute value']

Attribute based xpath
================
//input[@type='password']-password webelement

Text based Xpath:
=================
//tagname[text()="Text value"]

Partial matches
===============
//tagname[contains(@attribute,"attributeValue")]
//tagname[contains(text(),"textValue")]

Collection based xpath:
=======================
(relative xpath)[index]

Advanced XPath :

1. Parent to Child:
syntax:
------
 (Relative xpath of parent)/tagname of the child (relative xpath)
 (//div[@class='_6ltg'])[2]/a

2.child to Parent
syntax :
------
  (Realtive xpath of child)/parent::tagname of parent
  //input[@id='password']/parent::p


3.GrandParent to grandchild
syntax:
------
(relative xpath of grandparent)//tagname of grandchild
(//form//input)[3]

4.GrandChild  to grandParent:
syntax:
-------
(relative xpath of grandchild) /ancestor::tagname of garentparent
//input[@id='password']/ancestor::div

5.Elder to younger sibling
syntax:
------
(relative xpath of elder)/following-sibling::tagname of younger

//p[@class='top']/following-sibling::p

6.Younger to elder
syntax:
-------
(relative xpath of yonger)/preceding-sibling::tagname of elder
(//p)[3]/preceding-sibling::p

7.Elder to Younger cousin
syntax:
------
(relative xpath of elder)/following::tagname of younger

//input[@id='username']/following::input

8.Younger to Elder cousin
syntax:
-------
(relative xpath of younger)/preceding::tagname of elder

//input[@value='Login']/preceding::label

