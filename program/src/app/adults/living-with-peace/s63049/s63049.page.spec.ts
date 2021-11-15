import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63049Page } from './s63049.page';

describe('S63049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63049Page;
  let fixture: ComponentFixture<S63049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
