import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-localstorage-backend";

const storedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: storedLanguage,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          announcements: "Announcements",
          announcement: "announcement",
          noAnnouncement: "No Announcement",
          editAnnouncement: "Edit Announcement",
          date: "Date",
          trendingNow: "Trending now",
          seeAll: "See all",
          todayAdminSchedule: "Today's Admins",
          holiday: "Holiday",
          timePeriod: "Time Period",
          OnDutyAdmin: "Admin",
          forum: "Forum",
          disposableMaterial: "Disposable Material",
          material: "Material",
          tool: "Tool",
          machine: "Machine",
          recentlyAdded: "Recently added",
          searchMaterial: "Search Material",
          allMaterials: "All Materials",
          newMaterial: "New Material",
          searchTool: "Search Tool",
          allTools: "All Tools",
          newTool: "New Tool",
          photoLink: "Photo Link",
          category: "Category",
          create: "create",
          delete: "delete",
          star: "star",
          addToShoppingCart: "add to shopping cart",
          share: "share",
          partName: "Part Name",
          position: "Position",
          remain: "Remain",
          usage: "Total Usage",
          description: "Description",
          valuable: "Valuable",
          fee: "Fee",
          tutorialLink: "Tutorial Link",
          piece: "piece(s)",
          edit: "edit",
          repair: "repair",
          allAnnouncements: "All Announcements",
          newAnnouncement: "New Announcement",
          title: "Title",
          content: "Content",
          myAccount: "My Account",
          profile: "Profile",
          notifications: "Notifications",
          borrowHistory: "Borrow History",
          login: "Log in",
          signup: "Sign up",
          logout: "Log out",
          shoppingCart: "Shopping Cart",
          info: "Tutorial",
          interaction: "Interaction",
          all: "All",
          clip: "Clip",
          map: "Map",
          usersBorrowingData: "User Borrowing Data",
          authorizedCode: "Authorized Code",
          generateCode: "Generate Code",
          lastChange: "Last changed",
          length: "length",
          cancel: "cancel",
          languages: "Languages",
          starred: "Starred",
          unstar: "Unstar",
          sidebar: "sidebar",
          hide: "hide",
          userProfile: "User Profile",
          verified: "Verified",
          user: "User",
          admin: "Admin",
          minister: "Minister",
          username: "Username",
          studentId: "Student ID",
          password: "Password",
          laserCutAvailable: "Laser Cut Available",
          submit: "submit",
          unborrowedList: "Borrow List",
          unborrowed: "Unborrowed",
          borrowing: "Borrowing",
          unreturned: "Unreturned",
          figure: "Figure",
          name: "Name",
          quantity: "Quantity",
          actions: "Actions",
          borrowAgain: "Borrow Again",
          borrow: "borrow",
          deleteHistory: "Delete History",
          status: "Status",
          processing: "Processing",
          success: "Success",
          failed: "Failed",
          notReturnedYet: "Not Returned Yet",
          alreadyTaken: "Already Taken",
          returned: "Returned",
          pageNotFound: "Page Not Found",
          loginToBorrowMaterialsOrTools: "Log in to borrow materials or tools",
          signUpToBorrowMaterialsOrTools:
            "Sign up to borrow materials or tools",
          dontHaveAnAccount: "Don't have an account?",
          confirmPassword: "Confirm Password",
          haveAccount: "Already had an account?",
          introduction: "Introduction",
          tableOfContents: "Contents",
          briefIntroduction: "Breif Introduction",
          schedule: "Schedule",
          rules: "Rules",
          pleaseFillInAllFields: "Please fill in all fields",
          enterPassword: "Enter Password",
          enterYourPasswordForConfirmation:
            "Enter your password for confirmation",
          noResult: "No results.",
          none: "None",
          next: "Next",
          previous: "Previous",
          selected: "selected.",
          upload: "Upload",
          alertDialogTitle: "Are you absolutely sure?",
          alertDialogDescription:
            "This action cannot be undone. This will permanently delete the",
          continue: "continue",
          editProfile: "Edit Profile",
          allUsersBorrowingData: "All Users Borrowing Data",
          connected: "You are online",
          unconnected: "No internet connection",
          connectToTheInternet: "Connect to the internet.",
          offlineMessage: "You're offline. Check your connection.",
          retry: "Retry",
          materialNotFound: "Material Not Found",
          toolNotFound: "Tool Not Found",
          notFound: "Not Found",
          noMaterial: "No Material",
          noTool: "No Tool",
          editTool: "Edit Tool",
          editMaterial: "Edit Material",
          more: "more",
          noResults: "No results",
          allDisposableMaterials: "All Disposable Materials",
          allMachines: "All Machines",
          settings: "Settings",
          avatar: "Avatar",
          clickToUpload: "Click to upload",
          max: "max",
          preview: "Preview",
        },
      },
      zh: {
        translation: {
          welcome: "歡迎",
          announcements: "公告",
          announcement: "公告",
          noAnnouncement: "無公告",
          editAnnouncement: "編輯公告",
          date: "日期",
          trendingNow: "最新消息",
          seeAll: "查看全部",
          todayAdminSchedule: "今日管理員班表",
          holiday: "假日",
          timePeriod: "時段",
          OnDutyAdmin: "值班者",
          forum: "論壇",
          disposableMaterial: "耗材",
          material: "元件",
          tool: "工具",
          machine: "機台",
          recentlyAdded: "最新文章",
          searchMaterial: "搜尋元件",
          allMaterials: "元件一覽",
          newMaterial: "新增元件",
          searchTool: "搜尋工具",
          allTools: "工具一覽",
          newTool: "新增工具",
          photoLink: "圖片連結",
          category: "類別",
          create: "新增",
          delete: "刪除",
          star: "收藏",
          addToShoppingCart: "加入購物車",
          share: "分享",
          partName: "型號",
          position: "位置",
          remain: "剩餘",
          usage: "總使用量",
          description: "描述",
          valuable: "要錢",
          fee: "費用",
          tutorialLink: "使用教學",
          piece: "個",
          edit: "編輯",
          repair: "報修",
          allAnnouncements: "所有公告",
          newAnnouncement: "新增公告",
          title: "標題",
          content: "內文",
          myAccount: "我的帳號",
          profile: "個人資料",
          notifications: "通知",
          borrowHistory: "借用紀錄",
          login: "登入",
          signup: "註冊",
          logout: "登出",
          shoppingCart: "購物車",
          info: "教學",
          all: "一覽",
          clip: "影片",
          interaction: "互動",
          map: "地圖",
          usersBorrowingData: "使用者借用資料",
          authorizedCode: "授權碼",
          generateCode: "生成授權碼",
          lastChange: "最後更新",
          length: "長度",
          cancel: "取消",
          languages: "語言",
          starred: "已收藏",
          unstar: "取消收藏",
          sidebar: "側欄",
          hide: "隱藏",
          userProfile: "個人資料",
          verified: "已驗證",
          user: "使用者",
          admin: "管理員",
          minister: "部長",
          username: "名稱",
          studentId: "學號",
          password: "密碼",
          laserCutAvailable: "可獨自使用雷切",
          submit: "送出",
          unborrowedList: "預借清單",
          unborrowed: "尚未借用",
          borrowing: "借用中",
          unreturned: "尚未歸還",
          figure: "圖片",
          name: "名稱",
          quantity: "預借數量",
          actions: "操作",
          borrowAgain: "再次借用",
          borrow: "借用",
          deleteHistory: "刪除紀錄",
          status: "狀態",
          processing: "審核中",
          success: "可領取",
          failed: "失敗",
          notReturnedYet: "尚未歸還",
          alreadyTaken: "已領取",
          returned: "已歸還",
          pageNotFound: "找不到該頁面",
          loginToBorrowMaterialsOrTools: "登入以借用元件或工具",
          signUpToBorrowMaterialsOrTools: "註冊帳號以借用元件或工具",
          dontHaveAnAccount: "尚未註冊帳號？",
          confirmPassword: "確認密碼",
          haveAccount: "已有帳號？",
          introduction: "介紹",
          tableOfContents: "目錄",
          briefIntroduction: "簡介",
          schedule: "班表",
          rules: "規範",
          pleaseFillInAllFields: "請填寫以下資訊",
          enterPassword: "輸入密碼",
          enterYourPasswordForConfirmation: "輸入密碼以確認",
          noResult: "無結果",
          none: "無",
          next: "下一步",
          previous: "上一步",
          selected: "已選擇",
          upload: "上傳",
          alertDialogTitle: "您確定嗎？",
          alertDialogDescription: "此動作無法復原，將永久刪除此",
          continue: "繼續",
          editProfile: "編輯個人資料",
          allUsersBorrowingData: "所有使用者借用清單",
          connected: "您已連線",
          unconnected: "無網路連線",
          connectToTheInternet: "連線至網路",
          offlineMessage: "您已離線，請檢查您的網路連線",
          retry: "重試",
          materialNotFound: "找不到元件",
          toolNotFound: "找不到工具",
          notFound: "找不到",
          noMaterial: "無元件",
          noTool: "無工具",
          editTool: "編輯工具",
          editMaterial: "編輯元件",
          more: "更多",
          noResults: "無結果",
          allDisposableMaterials: "耗材一覽",
          allMachines: "機台一覽",
          settings: "設定",
          avatar: "頭像",
          clickToUpload: "點擊上傳",
          max: "最大",
          preview: "預覽",
        },
      },
    },
  });

export default i18n;
