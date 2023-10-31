import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62132Page } from './s62132.page';

describe('S62132Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62132Page;
  let fixture: ComponentFixture<S62132Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62132Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62132Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
