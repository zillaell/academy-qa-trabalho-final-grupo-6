*** Settings ***
Resource    ../base.robot
*** Variables ***
${HOME_TXT}        xpath=//android.view.View[@content-desc="Home"]
${MENU_HOME}       xpath=//android.widget.Button[@content-desc="Open navigation menu"]
${CABECALHO_HOME}  xpath=//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]


*** Keywords ***