import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53059Page } from './s53059.page';

describe('S53059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53059Page;
  let fixture: ComponentFixture<S53059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
