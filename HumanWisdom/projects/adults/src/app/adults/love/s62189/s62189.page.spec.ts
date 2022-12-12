import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62189Page } from './s62189.page';

describe('S62189Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62189Page;
  let fixture: ComponentFixture<S62189Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62189Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62189Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
