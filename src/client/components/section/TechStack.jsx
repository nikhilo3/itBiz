import React from 'react'
import AdobeIllustrator from '../../../assets/techlogos/Adobe-Illustrator.png'
import AdobeXd from '../../../assets/techlogos/Adobe-XD.png'
import Android from '../../../assets/techlogos/Android.png'
import Angular from '../../../assets/techlogos/Angular.png'
import Figma from '../../../assets/techlogos/Figma.png'
import Firebase from '../../../assets/techlogos/Firebase.png'
import IOS from '../../../assets/techlogos/IOS.png'
import Laravel from '../../../assets/techlogos/Laravel.png'
import Nodejs from '../../../assets/techlogos/Nodejs.png'
import Photoshop from '../../../assets/techlogos/Photoshop.png'
import Python from '../../../assets/techlogos/Python.png'
import react from '../../../assets/techlogos/React.png'
import Shopify from '../../../assets/techlogos/Shopify.png'
import Unity from '../../../assets/techlogos/Unity.png'
import Wordpress from '../../../assets/techlogos/Wordpress.png'
import flutter from '../../../assets/techlogos/flutter.png'
import kotlin from '../../../assets/techlogos/kotlin.png'


function TechStack() {
  return (
    <>
        <div className="outerdiv mx-[7rem]">
            <h2>Our Tech Stack</h2>
            <span>Engaging Creative Minds Via Technology</span>

            <div className="techlogos grid grid-cols-6 gap-6">
                <div className="techlogo">
                    <img src={AdobeIllustrator} alt="AdobeIllustrator" className='h-[135px] w-[135px]'/>
                    <span>Graphics</span>
                </div>
                <div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div>
                <div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div><div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div><div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div><div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div><div className="techlogo">
                    <img src={AdobeXd} alt="AdobeIllustrator" />
                    <span>Adobe XD</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TechStack