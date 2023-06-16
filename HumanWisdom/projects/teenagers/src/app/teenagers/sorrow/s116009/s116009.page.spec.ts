import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116009Page } from './s116009.page';

describe('S116009Page', () => {
      
    let component:  S116009Page;
  let fixture: ComponentFixture<S116009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
