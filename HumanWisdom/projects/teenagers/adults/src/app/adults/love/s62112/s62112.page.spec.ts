import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62112Page } from './s62112.page';

describe('S62112Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62112Page;
  let fixture: ComponentFixture<S62112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
