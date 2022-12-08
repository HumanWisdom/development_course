import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62126Page } from './s62126.page';

describe('S62126Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62126Page;
  let fixture: ComponentFixture<S62126Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62126Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62126Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
