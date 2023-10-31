import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62049Page } from './s62049.page';

describe('S62049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62049Page;
  let fixture: ComponentFixture<S62049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
