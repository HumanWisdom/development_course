import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53152Page } from './s53152.page';

describe('S53152Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53152Page;
  let fixture: ComponentFixture<S53152Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53152Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53152Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
