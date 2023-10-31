import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63015Page } from './s63015.page';

describe('S63015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63015Page;
  let fixture: ComponentFixture<S63015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
