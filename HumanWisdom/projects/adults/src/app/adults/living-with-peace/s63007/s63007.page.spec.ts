import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63007Page } from './s63007.page';

describe('S63007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63007Page;
  let fixture: ComponentFixture<S63007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
