import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62128Page } from './s62128.page';

describe('S62128Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62128Page;
  let fixture: ComponentFixture<S62128Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62128Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62128Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
