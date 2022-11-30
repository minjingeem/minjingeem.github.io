import React, { useState } from 'react';
import "./services.css";



const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">비지니스를 이해하는 <br /> 꿈꾸는 개발자</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        
                        <h3 className="services__modal-title">비지니스를 이해하는 꿈꾸는 개발자</h3>
                        <p className="services__modal-description">  
                        </p>
                        <p className="services__modal-services grid">
                            제 자신의 참여와 책임감이 서비스를 통해 회사와 고객에게 긍정적인 가치를 창출하는 꿈을 꿉니다. 
                            회사 입장에서 긍정적인 가치 중 하나는 수익 창출과 직결되어 있음을 이해하고 있습니다. 
                            또한, 고객의 니즈를 파악해야지만 서비스를 통해 고객에게 긍정적인 경험을 제공할 수 있고 
                            이것이 회사에 긍정적인 가치를 창출한다는 것을 이해하고 있습니다.
                           
                            <br></br>
                            <br></br>
                            
                            서비스가 대상으로 하는 고객은 누구이며 언제 사용되는가, 타깃 고객이 필요로한(또는, 개선되어야 할) 
                            서비스와 기능은 무엇인가, 회사가 제공하는 서비스의 강점은 무엇인가, 어떠한 리스크가 있는가와 같은 
                            질문에 대한 고민을 늘 우선순위에 두고 있습니다. 이는 저의 꿈을 구체화 할 때 좋은 청사진이 되어 
                            운선순위 결정, 의미있는 문제 도출과 적절한 해결책을 모색할 때 큰 도움이 됩니다. 개발자의 고민 흔적이
                            진정으로 녹아있는 서비스는 회사, 고객, 그리고 개발자 모두에게 긍정적인 가치를 창출한다고 믿습니다.
                           
                            <br></br>
                            <br></br>
                            
                            비즈니스 도메인에 대한 명확한 이해를 바탕으로 서비스의 방향과 의도를 정확히 파악하여 
                            합리적인 솔루션을 제안 할 수 있는 성장이 빠른 개발자가 되고 싶습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">유연하고 간결한 <br /> 동료</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            

                        <h3 className="services__modal-title">유연하고 간결한 동료</h3>
                        <p className="services__modal-description">
                        </p>
                        <p className="services__modal-services grid">
                            유연한 사고방식을 가지고 있습니다. 우리는 대부분의 상황에서 동료와의 협력과 소통을 통해 
                            주요한 결정을 내리고 업무를 진행합니다. 다양한 경험을 가진 다양한 사람들과 의사결정을 할때 
                            ‘생각의 문’을 열어두는 것은 아주 중요한 일 입니다. 여러 관점 속에서 새로운 의견이 교류 될때 
                            건전한 결정을 내릴 수 있기 때문입니다.
                           
                            <br></br>
                            <br></br>
                            
                            동료들과 의사소통을 할 때에 간결함을 우선순위에 두고 있습니다. 특히나 업무와 관련된 사안일 경우에는 
                            명확한 의견 전달을 위해 곡해의 여지가 없고 핵심만 전달 할 수 있는 두괄식 화법을 사용합니다. 단순하고 
                            간결한 대화를 통해 빠르게 핵심만을 전달해 업무의 효율을 높혀왔습니다.
                           
                            <br></br>
                            <br></br>
                            
                            저의 유연함과 간결함으로 동료들과 머리를 맞대어 공동의 목표를 위해 끊임없이 고민해왔습니다. 서로가 
                            놓치고 있는 부분을 채워주며 지식을 공유하고, 건강한 피드백을 나누며 함께 성장해 왔습니다. 이러한 저의 
                            soft skill이 결과적으로 팀의 생산성, 나아가 비지니스의 성장에 기여 할 것이라 믿습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">진화하는 <br /> 호모사피엔스</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">진화하는 호모사피엔스</h3>
                        <p className="services__modal-description">
                        </p>
                        <p className="services__modal-services grid">
                            우리의 조상이 끊임 없이 진화하여 지금의 우리가 있듯이, 과거의 자신으로 부터 성장하여 지금의 
                            제가 있습니다. 이러한 변화는 한 순간에 가능한 것이 아닙니다. 꾸준한 행동양식이 쌓이고 반복 되어야 
                            지만 성장을 이뤄낼 수 있습니다. 또한, 더디어 보이는 순간들을 참고 이겨 내야 지만 성장이라는 달콤함을 
                            맛 볼 수 있습니다.
                           
                            <br></br>
                            <br></br>
                            
                            저의 진화는 ‘탐구’ 그리고 ‘기록’의 끊임없는 반복으로 이루어져 있습니다. 제게 있어 탐구란 탐정놀이와 
                            같습니다. 꼬리에 꼬리를 무는 질문들의 해답을 쫓아가는 과정이기 때문입니다. 보통 근본적인 답에 도달하는데,
                            그 과정 속에서 단서들을 이어 붙여 큰 틀을 이해하게 됩니다. 이는 특히나 개발 공부를 할때 큰 도움이 
                            되었습니다. 오류의 원인을 찾아내 분석하고, 근본적인 해결책을 탐구하는 과정에서 그려진 마인드 맵이 단단히 
                            결속되어 같은 실수를 반복하지 않게 만들어 주는 덕분입니다. 
                           
                            <br></br>
                            <br></br>
                            
                            저의 아침은 기록과 함께 시작합니다. 오늘의 목표를 중요도를 기준으로 우선순위를 정해 정리하고 하나씩
                            지워나갑니다. 아침의 기록을 통해 하루를 설계하고 계획대로 움직입니다. 코드를 작성하며 만나는 오류들도
                            매일 기록으로 남깁니다. 이 기록은 저의 중요한 자산이되고 기록이 많이 쌓일수록 저의 경험이 그만큼
                            늘어났다는 것을 의미하기도 합니다. 

                            <br></br>
                            <br></br>

                            오늘도 저는 탐구하고 기록하며 성장하고 있습니다. 탐구와 기록이 쌓이고 쌓여
	                        어느새 빠르게 성장하고 있는 제 모습을 기대하고 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services