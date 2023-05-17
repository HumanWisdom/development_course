import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116072Page } from './s116072.page';

describe('S116072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116072Page;
  let fixture: ComponentFixture<S116072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
