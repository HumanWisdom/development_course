import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62196Page } from './s62196.page';

describe('S62196Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62196Page;
  let fixture: ComponentFixture<S62196Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62196Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62196Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
