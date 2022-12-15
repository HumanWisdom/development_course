import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62016Page } from './s62016.page';

describe('S62016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62016Page;
  let fixture: ComponentFixture<S62016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
