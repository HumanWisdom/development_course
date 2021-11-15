import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62127Page } from './s62127.page';

describe('S62127Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62127Page;
  let fixture: ComponentFixture<S62127Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62127Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62127Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
