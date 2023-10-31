import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62015Page } from './s62015.page';

describe('S62015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62015Page;
  let fixture: ComponentFixture<S62015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
