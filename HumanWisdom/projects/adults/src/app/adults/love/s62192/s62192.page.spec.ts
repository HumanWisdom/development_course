import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62192Page } from './s62192.page';

describe('S62192Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62192Page;
  let fixture: ComponentFixture<S62192Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62192Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62192Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
