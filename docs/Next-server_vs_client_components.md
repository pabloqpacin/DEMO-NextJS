### **Client vs. Server Components in Next.js** 🚀

Next.js 13+ introduces the **App Router**, which allows components to be either **Client Components** or **Server Components**. This hybrid rendering model helps optimize performance by running components where they are needed most.

---

## **1️⃣ What Are Server Components?**
✅ **By default, all Next.js components are Server Components** (unless marked otherwise).  
✅ Server Components run **only on the server** (never in the browser).  
✅ They are **faster and more efficient** because they don’t include unnecessary JavaScript on the client.  

### **Example: Server Component**
```tsx
export default function ServerComponent() {
  const serverTime = new Date().toLocaleTimeString();

  return <h1>Server Time: {serverTime}</h1>;
}
```
- This component **runs on the server** and sends the pre-rendered HTML to the client.  
- The client **doesn’t see the JavaScript logic**—just the final result.  
- If refreshed, it will **update the time on a new request** (but won’t update dynamically).  

---

## **2️⃣ What Are Client Components?**
✅ **Client Components run in the browser** and support **interactive features** (e.g., buttons, state, effects).  
✅ They include **extra JavaScript**, which can slow down the page compared to Server Components.  
✅ You must add `"use client";` at the **top of the file** to make it a Client Component.

### **Example: Client Component**
```tsx
"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```
- This component **runs on the client** and updates dynamically when clicked.  
- **State (`useState`) and event handlers (`onClick`) work here**, but wouldn’t work in a Server Component.  

---

## **3️⃣ When to Use Each?**
| Feature  | Server Components ✅ | Client Components ✅ |
|----------|------------------|------------------|
| **Static content** (headings, text) | ✅ Best choice | ❌ Overhead |
| **Fetching data from databases** | ✅ Best choice | ❌ Exposes database logic |
| **Using `useState`, `useEffect`, `useRef`** | ❌ Not possible | ✅ Required |
| **Event listeners (`onClick`, `onChange`)** | ❌ Not possible | ✅ Required |
| **Smaller bundle size** | ✅ Yes | ❌ No (adds JavaScript) |
| **Third-party libraries (if needed in the browser, like ShadCN UI)** | ❌ Not supported | ✅ Required |

---

## **4️⃣ Why is Your `Heading` Component a Client Component?**
Your `Heading` component has `"use client";` at the top.  

### 🔥 **Why?**
- It **imports the `Button` component** from `@/components/ui/button`, which likely **requires interactivity**.
- It includes **Lucide React icons (`ArrowRight`)**, which are likely **interactive or use browser-side rendering**.

✅ **If your heading doesn’t need interactivity**, you can remove `"use client";` to turn it into a **Server Component**, improving performance.  

---

## **5️⃣ Best Practice for Hybrid Components (Mixing Server & Client Components)**
You can **combine** both to optimize performance.  

### ✅ **Example: Use a Server Component as the Parent**
```tsx
import ClientButton from "./ClientButton"; // Client Component

export default function ServerComponent() {
  return (
    <div>
      <h1>Hello from Server Component</h1>
      <ClientButton />
    </div>
  );
}
```

### ✅ **Client Component (Only Where Needed)**
```tsx
"use client";

export default function ClientButton() {
  return <button onClick={() => alert("Clicked!")}>Click Me</button>;
}
```

🚀 **Why?**
- The heading stays **on the server (faster, smaller page size)**.
- The button is **interactive and runs in the browser**.

---

## **TL;DR: When to Use What?**
✅ **Use Server Components for:**
- Static text, images, and layouts.
- Fetching data securely (databases, APIs).
- SEO-friendly, faster pages.

✅ **Use Client Components for:**
- Event handlers (`onClick`, `onChange`).
- State management (`useState`, `useEffect`).
- UI libraries (ShadCN, Lucide icons, modals).

---

💡 **Would you like me to refactor your `Heading` component to be a Server Component unless necessary?** 🚀