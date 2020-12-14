import React from "react";
import Lesson from "./Lesson";
import ContactForm from "./ContactFrom";

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: "イラスト投稿",
        image: "http://flat-icon-design.com/f/f_object_27/s512_f_object_27_1bg.png",
        introduction: "あなたが作成したイラストを実際に投稿してみましょう！",
      },
      {
        name: "漫画投稿",
        image: "http://flat-icon-design.com/f/f_object_27/s512_f_object_27_2bg.png",
        introduction: "あなたが作成した漫画を実際に投稿してみましょう！",
      },
    ];

    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="copy-container">
            <h2>イラスト・漫画を投稿してみましょう！</h2>
          </div>
          <div className="lesson-container">
            <h3>投稿できるもの</h3>
            { lessonList.map((lessonItem) => {
                <Lesson (
                  name={ lessonItem.name }
                  image={ lessonItem.image }
                  introduction={ lessonItem.introduction }
                />
              );
            })}
          </div>
          <div className="contact-container">
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}
