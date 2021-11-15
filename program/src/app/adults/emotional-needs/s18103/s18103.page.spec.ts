import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18103Page } from './s18103.page';

describe('S18103Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18103Page;
  let fixture: ComponentFixture<S18103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
