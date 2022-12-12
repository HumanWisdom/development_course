import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62012Page } from './s62012.page';

describe('S62012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62012Page;
  let fixture: ComponentFixture<S62012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
