import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62070Page } from './s134073.page';

describe('S62070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62070Page;
  let fixture: ComponentFixture<S62070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
