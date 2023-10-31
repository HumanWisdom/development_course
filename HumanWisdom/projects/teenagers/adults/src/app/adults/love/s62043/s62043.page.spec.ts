import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62043Page } from './s62043.page';

describe('S62043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62043Page;
  let fixture: ComponentFixture<S62043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
