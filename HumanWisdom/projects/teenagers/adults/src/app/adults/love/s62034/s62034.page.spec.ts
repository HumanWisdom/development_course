import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62034Page } from './s62034.page';

describe('S62034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62034Page;
  let fixture: ComponentFixture<S62034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
