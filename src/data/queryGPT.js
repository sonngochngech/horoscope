export const locationQuery=
`
(Ví dụ: (đây là một câu sau khi lấy dữ liệu từ câu trả lời)
    với kết quả bạn đưa cho tôi
    {
      Điểm mạnh: "thông minh, khả năng giao tiếp tốt"
      Điểm yếu: "dễ bị cảm xúc chi phối, dễ căng thẳng áp lực gây ra khổ tâm mệt mỏi"
      Hướng:  Bắc 
      Đặc trưng của địa điểm: "liên quan tới biển,sông"
      Lý do: " Nơi đây thể hiện sự năng động, hưng thịnh và tinh thần ham thích phiêu lưu của những người có mệnh này. Không khí tại các vùng biển sẽ giúp bạn giải tỏa căng thẳng và cân bằng cảm xúc. Đồng thời, bạn cũng sẽ có thể tận hưởng năng lượng của thiên nhiên một cách triệt để, thu nhận nhiều sinh khí thuận mệnh đất trời."
      Tên các tỉnh: ["Phú Quốc","Đà Nẵng","Nha Trang"]
      Mô tả các tỉnh: ["Phú Quốc là sự hội tụ của thiên nhiên hoang sơ, biển trong cát vàng - đẹp đến ngỡ ngàng của hòn đảo ngọc. Đắm mình ngắm rạn san hô ở Hòn Móng Tay, lưu dấu những bức hình kỷ niệm ở Cổng Trời (The Gate Keeper), nhà gỗ hay chiều hoàng hôn buông doens’t fine ở Bãi Sao. Tối đến thì thả mình vào ẩm thực địa phương: bún quậy, bún kèn, cơm chiên ghẹ, hải sản làng chài Hàm Ninh. Nơi đây có nhiều biển đảo và hải sản, đây là những yếu tố thích hợp để cải vận và bổ sung năng lượng tốt cho người mệnh khuyết Thủy", 
                       "Đà Nẵng là một trong năm thành phố trực thuộc trung ương của Việt Nam, nằm tại vùng Duyên hải Nam Trung Bộ. Đây là thành phố trung tâm và lớn nhất của toàn bộ khu vực Miền Trung, đóng vai trò là hạt nhân quan trọng của Vùng kinh tế trọng điểm Miền Trung", 
                       "Nha Trang là một thành phố ven biển và là trung tâm hành chính của tỉnh Khánh Hòa, Việt Nam. Trước đây, vùng đất Nha Trang vốn thuộc về Chiêm Thành, do đó các di tích của người Chăm vẫn còn tồn tại nhiều nơi ở Nha Trang"]
    }
    Theo kiến thức Phong Thủy Bát Tự, bạn thuộc mệnh Kim, khuyết Thủy. Có điểm mạnh thông minh, khả năng giao tiếp tốt. Tuy nhiên lại dễ bị cảm xúc chi phối, dễ căng thẳng áp lực gây ra khổ tâm mệt mỏi. Để cân bằng mệnh cách và bổ sung nhiều may mắn & niềm vui, bạn nên đi du lịch về hướng Bắc, tới các địa điểm liên quan tới biển, sông. Nơi đây thể hiện sự năng động, hưng thịnh và tinh thần ham thích phiêu lưu của những người có mệnh này. Không khí tại các vùng biển sẽ giúp bạn giải tỏa căng thẳng và cân bằng cảm xúc. Đồng thời, bạn cũng sẽ có thể tận hưởng năng lượng của thiên nhiên một cách triệt để, thu nhận nhiều sinh khí thuận mệnh đất trời
    Tên các tỉnh: Phú Quốc,Đà Nẵng,Nha Trang
    Mô tả các tỉnh: Phú Quốc là sự hội tụ của thiên nhiên hoang sơ, biển trong cát vàng - đẹp đến ngỡ ngàng của hòn đảo ngọc. Đắm mình ngắm rạn san hô ở Hòn Móng Tay, lưu dấu những bức hình kỷ niệm ở Cổng Trời (The Gate Keeper), nhà gỗ hay chiều hoàng hôn buông doens’t fine ở Bãi Sao. Tối đến thì thả mình vào ẩm thực địa phương: bún quậy, bún kèn, cơm chiên ghẹ, hải sản làng chài Hàm Ninh. Nơi đây có nhiều biển đảo và hải sản, đây là những yếu tố thích hợp để cải vận và bổ sung năng lượng tốt cho người mệnh khuyết Thủy,
                    Đà Nẵng là một trong năm thành phố trực thuộc trung ương của Việt Nam, nằm tại vùng Duyên hải Nam Trung Bộ. Đây là thành phố trung tâm và lớn nhất của toàn bộ khu vực Miền Trung, đóng vai trò là hạt nhân quan trọng của Vùng kinh tế trọng điểm Miền Trung,
                    Nha Trang là một thành phố ven biển và là trung tâm hành chính của tỉnh Khánh Hòa, Việt Nam. Trước đây, vùng đất Nha Trang vốn thuộc về Chiêm Thành, do đó các di tích của người Chăm vẫn còn tồn tại nhiều nơi ở Nha Trang,
    )
      Hãy trả lời thật chi tiết như ví dụ trên dưới dạng json : {
      Điểm mạnh:...,
      Cải thiện:...,
      Hướng:...,
      Đặc trưng của địa điểm: liên quan ...,
      Lý do: ...,
      Tên các tỉnh: [ tỉnh 1, tỉnh 2, tỉnh 3],
      Mô tả các tỉnh: [câu văn mô tả tỉnh 1,câu văn mô tả tỉnh 1,câu văn mô tả tỉnh 1]
    }
    Đặc biệt lưu ý :   không để dấu chấm cuối câu lý do và mỗi câu văn miêu tả tỉnh phải có ít nhất hơn 200 chữ,
    (Chỉ ghi kết quả)
`