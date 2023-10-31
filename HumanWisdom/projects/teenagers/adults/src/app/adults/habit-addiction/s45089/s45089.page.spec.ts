import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45089Page } from './s45089.page';

describe('S45089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45089Page;
  let fixture: ComponentFixture<S45089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
