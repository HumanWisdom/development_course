import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S97001Page } from './s97001.page';

describe('S97001Page', () => {
      
    let component:  S97001Page;
  let fixture: ComponentFixture<S97001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S97001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S97001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
