// app/api/upload/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto'; // Import crypto for generating unique file names


export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'File not provided' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate a secret/unique file name using a hash
    const uniqueName = `${crypto.randomBytes(16).toString('hex')}-${file.name}`;
    const uploadPath = path.join(process.cwd(), 'uploads', uniqueName);

    await fs.promises.mkdir(path.dirname(uploadPath), { recursive: true });
    await fs.promises.writeFile(uploadPath, buffer);

    return NextResponse.json({ message: 'File uploaded successfully', file: file.name });
  } catch (error) {
    // Log the error to console for debugging
    console.error('File upload error:', error);

    return NextResponse.json(
      { error: 'An error occurred during file upload. Please try again.' },
      { status: 500 }
    );
  }
}
