import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45039Page } from './s45039.page';

describe('S45039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45039Page;
  let fixture: ComponentFixture<S45039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
