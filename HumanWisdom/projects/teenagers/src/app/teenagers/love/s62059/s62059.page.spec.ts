import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62059Page } from './s62059.page';

describe('S62059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62059Page;
  let fixture: ComponentFixture<S62059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
