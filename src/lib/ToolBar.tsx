import React from "react";
function ToolBar () {
    return (<div className={ 'toolbar' }>
        <svg className="md-icon" aria-hidden="true">
            <use xlinkHref="#icon-bold"/>
        </svg>
        <div className="md-toolbar-item" title="underline">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-underline"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="italic">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-italic"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="strikeThrough">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-strike-through"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="title">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-title"/>
            </svg>
        </div>
        {/*                <div className="md-dropdown md-dropdown-hidden" style={{ top: "34px", left: "121.5px"}}>
                    <div className="md-dropdown-overlay">
                        <ul className="md-menu">
                            <li className="md-menu-item">Lv1 Heading</li>
                            <li className="md-menu-item">Lv2 Heading</li>
                            <li className="md-menu-item">Lv3 Heading</li>
                            <li className="md-menu-item">Lv4 Heading</li>
                            <li className="md-menu-item">Lv5 Heading</li>
                            <li className="md-menu-item">Lv6 Heading</li>
                        </ul>
                    </div>
                </div>*/}
        <div className="md-toolbar-item" title="subscript">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-sub"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="superscript">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-sup"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="quote">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-quote"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="unordered list">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-unordered-list"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="ordered list">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-ordered-list"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="inline code">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-code-row"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="block-level code">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-code"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="link">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-link"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="image">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-image"/>
            </svg>
        </div>
        {/*  <div className="md-dropdown md-dropdown-hidden" style={{top: "34px", left: "424px"}}>
                    <div className="md-dropdown-overlay">
                        <ul className="md-menu">
                            <li className="md-menu-item">Add Img Link</li>
                            <li className="md-menu-item">Upload Img</li>
                            <li className="md-menu-item">Clip Upload</li>
                        </ul>
                    </div>
                </div>*/}
        <div className="md-toolbar-item" title="table">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-table"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="mermaid">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-mermaid"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="formula">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-formula"/>
            </svg>
        </div>
        {/* <div className="md-dropdown md-dropdown-hidden" style={{top: "34px", left: "540.5px"}}>
                    <div className="md-dropdown-overlay">
                        <ul className="md-menu">
                            <li className="md-menu-item">inline</li>
                            <li className="md-menu-item">block</li>
                        </ul>
                    </div>
                </div>*/}
        <div className="md-toolbar-item" title="revoke">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-revoke"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="undo revoke">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-next"/>
            </svg>
        </div>
        <div className="md-toolbar-item" title="save">
            <svg className="md-icon" aria-hidden="true">
                <use xlinkHref="#icon-baocun"/>
            </svg>
        </div>
    </div>)
}

export default ToolBar
