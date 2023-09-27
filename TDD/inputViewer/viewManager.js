class ViewManager {
    constructor(textManager, options) {

        // textManager가 TextManager의 인스턴스가 아니라면
        if (textManager.constructor !== TextManager) {
            throw Error('teztManager 객체가 아닌 다른 것이 전달되었습니다.');
        }

        // options로 전달받을 세가지 요소 중에 누락이 존재한다면
        if (!options.inpTxt || !options.viewerEl || !options.btnEl) {
            throw Error('options에 필요한 요소 중 누락된 요소가 존재합니다.');
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        });
    }

    changeValue() {
        // input 요소에 사용자가 입력한 값을 가져와서 textManager가 관리하게 합니다.
        this.textManager.setValue(this.inpTxt.value);
        this.updateView();
    }

    // textManager가 관리하는 값을 viewer에 적용합니다.
    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}