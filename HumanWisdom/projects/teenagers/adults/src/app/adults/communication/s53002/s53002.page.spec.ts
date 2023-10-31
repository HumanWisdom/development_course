import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53002Page } from './s53002.page';

describe('S53002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53002Page;
  let fixture: ComponentFixture<S53002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
