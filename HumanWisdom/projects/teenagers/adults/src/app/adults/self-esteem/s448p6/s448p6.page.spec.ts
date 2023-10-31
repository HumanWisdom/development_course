import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S448p6Page } from './s448p6.page';

describe('S448p6Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S448p6Page;
  let fixture: ComponentFixture<S448p6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S448p6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S448p6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
