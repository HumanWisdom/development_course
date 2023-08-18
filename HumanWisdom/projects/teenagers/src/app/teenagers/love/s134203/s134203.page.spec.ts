import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134203Page } from './s134203.page';

describe('S134203Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134203Page;
  let fixture: ComponentFixture<S134203Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134203Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134203Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
