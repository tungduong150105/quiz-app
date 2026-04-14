export const defaultQuestions = [
  {
    question:
      "Một đoàn tàu vượt qua một sân ga trong 36 giây và một người đàn ông đứng trên sân ga trong 20 giây. Nếu tốc độ của tàu là 54 km/h, chiều dài của sân ga là bao nhiêu?",
    options: ["15360", "153600", "30720", "307200"],
    answer: "30720",
    hint: "Gợi ý: Tính khoảng thời gian tàu đi qua sân ga (36 - 20 = 16 giây). Đổi 54 km/h ra m/s (15 m/s) và nhân lên.",
  },
  {
    question:
      "Có sai số 2% dư khi đo cạnh của một hình vuông. Tỉ lệ phần trăm sai số tính toán diện tích của hình vuông là:",
    options: ["5%", "27%", "3%", "4.04%"],
    answer: "4.04%",
    hint: "Gợi ý: Diện tích = cạnh ^ 2. Diện tích mới = (1.02 * cạnh)^2 = 1.0404 * cạnh^2. Vậy sai số là 4.04%.",
  },
  {
    question:
      "Tỉ lệ giữa chu vi và chiều rộng của một hình chữ nhật là 5 : 1. Nếu diện tích của hình chữ nhật là 216 cm vuông, thì chiều dài của hình chữ nhật đó là bao nhiêu?",
    options: ["18 cm", "117 cm", "3 cm", "111 cm", "Không đủ dữ kiện"],
    answer: "18 cm",
    hint: "Gợi ý: Chu vi = 2 * (Dài + Rộng). Từ tỉ lệ 5:1 suy ra Dài = 1.5 * Rộng. Diện tích = Dài * Rộng = 1.5 * Rộng^2 = 216.",
  },
  {
    question:
      "Chiều dài của một mảnh đất hình chữ nhật dài hơn chiều rộng 20 mét. Nếu chi phí rào phần đất là 26.50 đồng mỗi mét với tổng chi phí là 5300 đồng, chiều dài của mảnh đất tính theo mét là bao nhiêu?",
    options: ["500", "270", "30", "10"],
    answer: "30",
    hint: "Gợi ý: Tổng chu vi = 5300 / 26.50 = 200m. Một nửa chu vi = Dài + Rộng = 100m. Dài - Rộng = 20m. Giải hệ phương trình.",
  },
];
