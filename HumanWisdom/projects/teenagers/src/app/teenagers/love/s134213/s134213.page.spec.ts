import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134213Page } from './s134213.page';

describe('S134213Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134213Page;
  let fixture: ComponentFixture<S134213Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134213Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134213Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
